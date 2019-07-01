/**
 * Parse IPv6 Address tests.
 *
 * @author
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */
import TestRegister from "../TestRegister";

TestRegister.addTests([
    {
        name: "Parse IPv6 Address: Documentation Address",
        input: "2001:0db8:85a3:0000:0000:8a2e:0370:2332",
        expectedOutput: "Longhand:  2001:0db8:85a3:0000:0000:8a2e:0370:2332\nShorthand: 2001:db8:85a3::8a2e:370:2332\n\nThis is a documentation IPv6 address. This range should be used whenever an example IPv6 address is given or to model networking scenarios. Corresponds to 192.0.2.0/24, 198.51.100.0/24, and 203.0.113.0/24 in IPv4.\nDocumentation range: 2001:db8::/32",
        recipeConfig: [
            {
                "op": "Parse IPv6 address",
                "args": []
            },
        ],
    },
]);
