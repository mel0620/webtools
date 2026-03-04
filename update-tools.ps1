param([string]$toolsDir = ".")

$FA_LINK = '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />'
$FA_LINK_2 = '  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />'
$PWA_4 = "    <!-- Font Awesome 6 Free -->`n$FA_LINK`n    <!-- PWA + Vite entry -->`n    <link rel=`"manifest`" href=`"/manifest.webmanifest`" />`n    <meta name=`"theme-color`" content=`"#29C79F`" />`n    <link rel=`"stylesheet`" href=`"/src/css/main.css`" />"
$PWA_2 = "  <!-- Font Awesome 6 Free -->`n$FA_LINK_2`n  <!-- PWA + Vite entry -->`n  <link rel=`"manifest`" href=`"/manifest.webmanifest`" />`n  <meta name=`"theme-color`" content=`"#29C79F`" />`n  <link rel=`"stylesheet`" href=`"/src/css/main.css`" />"

$TOOL_SCRIPT_4 = "  <script type=`"module`" src=`"/src/js/tool-page.js`"></script>`n</body>"
$TOOL_SCRIPT   = $TOOL_SCRIPT_4

Get-ChildItem "$toolsDir\*.html" | ForEach-Object {
    $path = $_.FullName
    $c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $original = $c

    # Fix relative favicon paths
    $c = $c -replace '\.\./favicon\.png', '/favicon.png'
    $c = $c -replace 'href=`"\.\.\/favicon\.png`"', 'href="/favicon.png"'
    $c = $c -replace 'href="../favicon\.png"', 'href="/favicon.png"'

    # Fix apple-touch-icon
    $c = $c -replace '<link rel="apple-touch-icon" href="/favicon.png">', '<link rel="apple-touch-icon" href="/icons/icon-192.png">'

    # Replace CDN Tailwind (4-space indent)
    $c = $c -replace '    <script src="https://cdn\.tailwindcss\.com"></script>', $PWA_4

    # Replace CDN Tailwind (2-space indent)
    $c = $c -replace '  <script src="https://cdn\.tailwindcss\.com"></script>', $PWA_2

    # Remove old styles.css reference (both indent styles)
    $c = $c -replace '\s*<link rel="stylesheet" href="[^"]*src/css/styles\.css">', ''

    # Add tool-page.js module script before </body> if not already there
    if ($c -notmatch 'tool-page\.js') {
        $c = $c -replace '</body>', $TOOL_SCRIPT_4
    }

    if ($c -ne $original) {
        [System.IO.File]::WriteAllText($path, $c, [System.Text.Encoding]::UTF8)
        Write-Host "Updated: $($_.Name)"
    } else {
        Write-Host "No change: $($_.Name)"
    }
}
Write-Host "Done."
