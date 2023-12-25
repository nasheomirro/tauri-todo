## Excel Formatting Rules

To use this application, all excel files must follow a certain format in order for the application to parse files correctly. Note that the parser is not very strict and as long as your format follows the rules it will work.

1. There must be two columns above the data named `"names"` and `"grades"` and must live in the same row.

2. Directly below the row containing the two columns above, should all just be student rows, with their names and grades at the same column as the `"names"` and `"grades"` headers.

3. the two headers above should only span a single column, which also means the same for the data below.

4. the data that belongs in the `"names"` column must always be a string, and in the `"grades"` column always a number.
