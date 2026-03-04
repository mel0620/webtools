$files = Get-ChildItem 'c:\laragon\www\webtools\tools\*.html'
$files | ForEach-Object {
    $c = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $hasToolPage    = $c.Contains('tool-page.js')
    $hasTailwindCDN = $c.Contains('cdn.tailwindcss.com')
    $hasStylesCSS   = $c.Contains('styles.css')
    $hasMainCSS     = $c.Contains('/src/css/main.css')
    $hasFontAwesome = $c.Contains('font-awesome')
    Write-Host "$($_.Name): toolPage=$hasToolPage mainCSS=$hasMainCSS fa=$hasFontAwesome tailwindCDN=$hasTailwindCDN stylesOld=$hasStylesCSS"
}
