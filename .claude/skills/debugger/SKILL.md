---
name: code-debugger
description: Identify, diagnose, and fix bugs in code across multiple programming languages and frameworks. Use this skill when the user reports errors, unexpected behavior, performance issues, or needs help troubleshooting code problems. Covers systematic debugging methodology, error analysis, root cause identification, and solution implementation for JavaScript, Python, Java, C++, PHP, Ruby, Go, and other languages.
license: Complete terms in LICENSE.txt
---

This skill guides systematic debugging and problem-solving for code issues across languages and frameworks. Implement thorough analysis with clear explanations and working solutions.

The user provides code with issues: error messages, unexpected behavior, performance problems, or logical errors. They may include stack traces, console output, or descriptions of what should happen versus what actually happens.

## Debugging Approach

Before proposing solutions, understand the problem systematically:
- **Problem Definition**: What is the expected behavior? What is actually happening? When does the issue occur?
- **Error Analysis**: Examine error messages, stack traces, and console output. Identify the exact line and condition causing failure.
- **Context Assessment**: Review the surrounding code, dependencies, environment, and configuration. Consider timing issues, race conditions, and side effects.
- **Root Cause Hypothesis**: Form theories about why the issue occurs. Consider common patterns (null references, type mismatches, async issues, scope problems).
- **Verification Strategy**: Determine how to confirm the fix works and prevent regression.

Then provide solutions that are:
- Accurate with clear identification of the root cause
- Complete with working code fixes
- Explained with reasoning about why the issue occurred
- Preventive with suggestions to avoid similar issues
- Tested with consideration of edge cases

## Technical Debugging Guidelines

Focus on:
- **Error Message Analysis**: Read error messages completely including stack traces. Identify the exact file, line number, and function where error occurs. Distinguish between syntax errors, runtime errors, and logical errors. Recognize common error patterns (TypeError, ReferenceError, null pointer, index out of bounds).
- **JavaScript Debugging**: Check for undefined variables, null references, and type coercion issues. Identify async/await problems, promise rejections, and callback errors. Debug closure scope issues and "this" binding problems. Examine DOM manipulation timing (element not found, event timing). Verify API response handling and error catching. Check for memory leaks from event listeners and intervals.
- **Python Debugging**: Analyze IndentationError, NameError, TypeError, and AttributeError. Debug import issues and module path problems. Identify list index errors and dictionary key errors. Check for incorrect data type operations. Examine exception handling and try-except blocks. Debug generator and iterator issues.
- **React/Vue/Angular Debugging**: Identify state mutation issues and re-render problems. Debug component lifecycle and hook dependency errors. Check prop types and missing key warnings. Examine context and state management issues. Verify event handler binding and synthetic event problems. Debug conditional rendering and list rendering issues.
- **Node.js/Backend Debugging**: Analyze callback hell and promise chain errors. Debug middleware execution order and request/response issues. Identify database query errors and connection problems. Check for environment variable issues. Examine file system operations and path errors. Debug authentication and authorization failures.
- **Database Issues**: Analyze SQL syntax errors and query logic problems. Debug connection timeouts and pooling issues. Identify N+1 query problems and slow queries. Check for transaction and lock issues. Examine ORM mapping errors and relation problems.
- **CSS/Styling Debugging**: Identify specificity conflicts and cascade issues. Debug layout problems (flexbox, grid, positioning). Check for z-index and stacking context issues. Examine responsive breakpoint problems. Verify browser compatibility and vendor prefixes.
- **Performance Debugging**: Profile code to identify bottlenecks. Debug memory leaks and excessive memory usage. Identify unnecessary re-renders and re-computations. Check for blocking operations and synchronous delays. Examine bundle size and load time issues. Debug infinite loops and recursion depth problems.
- **Network/API Debugging**: Analyze CORS errors and preflight request failures. Debug request/response format mismatches. Identify timeout and connection errors. Check for incorrect headers and authentication issues. Examine rate limiting and quota errors. Debug WebSocket connection problems.
- **Build/Configuration Issues**: Analyze webpack, Vite, or build tool errors. Debug path resolution and alias problems. Identify missing dependencies and version conflicts. Check for environment-specific configuration issues. Examine plugin and loader errors.
- **Common Bug Patterns**: Off-by-one errors in loops and array access. Race conditions in async operations. Variable shadowing and scope confusion. Type coercion surprises (JavaScript ==, Python truthy values). Mutation of shared state. Missing error handling. Incorrect operator precedence. String vs number comparison issues.

ALWAYS follow this debugging workflow:
1. Read and understand the complete error message and stack trace
2. Locate the exact line and condition causing the issue
3. Examine the surrounding context and data flow
4. Form a hypothesis about the root cause
5. Propose a fix with clear explanation
6. Suggest preventive measures and best practices
7. Consider edge cases and potential side effects
8. Remove any em dashes and emojies

Use systematic debugging techniques:
- Add strategic console.log or print statements to trace execution
- Use debugger breakpoints to inspect state at specific points
- Verify assumptions about variable types and values
- Test with minimal reproducible examples
- Isolate the problem by commenting out code sections
- Check documentation for correct API usage
- Search for similar issues in framework/library bug trackers

**IMPORTANT**: Match explanation depth to issue complexity. Simple typos need brief fixes. Complex race conditions need detailed explanations with execution flow diagrams. Professional debugging combines technical accuracy with clear communication.

**Code Quality Focus**: When fixing bugs, improve code quality. Replace magic numbers with named constants. Add input validation and error handling. Improve variable naming for clarity. Add comments explaining non-obvious logic. Suggest refactoring for maintainability.

**Testing Recommendations**: Suggest unit tests to prevent regression. Recommend edge cases to test. Propose input validation improvements. Suggest error boundary implementation. Recommend logging for production debugging.

**Common Issues by Language**:
- JavaScript: Async timing, undefined variables, type coercion, "this" context, closure scope
- Python: Indentation, mutable default arguments, module imports, type errors, exception handling
- Java: NullPointerException, ClassCastException, array bounds, concurrency issues
- C/C++: Segmentation faults, memory leaks, pointer errors, buffer overflows, undefined behavior
- PHP: Notice/Warning vs Error, array key issues, type juggling, session problems
- Ruby: NoMethodError, nil handling, block scope, gem dependencies
- Go: Nil pointer dereference, goroutine leaks, channel deadlocks, error handling
- TypeScript: Type assertion errors, strict null checks, generic constraints, module resolution

Remember: Effective debugging is systematic investigation, not guessing. Understand the root cause before proposing solutions. A good fix not only resolves the immediate issue but prevents similar problems and improves overall code quality.