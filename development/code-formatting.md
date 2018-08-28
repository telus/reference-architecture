# Code Formatting

## Why

Each developer will have their own preferred format, based on how they learned to code. However, defining a standard for the appearance of code is an important step for every organization. Otherwise developers will not enjoy working on each other's code (and can cause issues).

## What

Define coding standard for TELUS apps. Use [editorconfig](http://editorconfig.org/) to keep this consistent across all apps/code editors.

## How

For all projects, use a `.editorconfig` file to apply the basic coding style across the application. This tool is cross-IDE compatible. There are plugins for IDEA/*Storm/Atom/Sublime/VSCode/etc. Install the plugin to ensure you are using adequate formatting!

-   CSS/JavaScript generally follows [Telus Style](https://drive.google.com/file/d/0B3daSGWx0ziOWHhscTluZjdIZUk/edit?usp=sharing), or [AirBnB style](https://github.com/airbnb/javascript).
-   Prime Framework PHP code generally follows [CodeIgniter Style](http://ellislab.com/codeigniter/user-guide/general/styleguide.html)
-   Ruby should follow the [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide)
-   Indents will be **two** spaces. No tabs! Please configure your editors accordingly, and consider turning on display of white spaces. By using spaces, we can indent code to a specific character alignment, with no issues regarding tab size, etc. While spaces do use more bytes, this should be compiled out for production.
-   Use UTF-8 encoding and Unix line breaks
-   Add a newline at the end of a file, and remove trailing whitespace on each line
-   Use JavaDoc-style comments before functions `/** */`. Use `//` for same-line. Use block style comments `/* */` sparingly.
-   Start brackets on the same line as if statements or function declarations. It is recommended to add whitespace before an else/catch/etc., if it is visually confusing to have it on the same line as the closing bracket.

For more detailed JavaScript style linting, use [ESLint](eslint.md) to apply our version of AirBnB's JavaScript standards to your projects.

## Who

Everyone!

## References

-   [Telus CSS/JS Style](https://drive.google.com/file/d/0B3daSGWx0ziOWHhscTluZjdIZUk/edit?usp=sharing)
-   [AirBnB style](https://github.com/airbnb/javascript)
-   [CodeIgniter Style](http://ellislab.com/codeigniter/user-guide/general/styleguide.html)
-   [Ruby Style](https://github.com/bbatsov/ruby-style-guide)
