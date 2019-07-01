/**
 * Group IP Addresses tests.
 *
 * @author h345983745
 *
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

import TestRegister from "../TestRegister";

TestRegister.addTests([
    {
        name: "Group IP addresses: Only Subnets, 1 Group",
        input: "192.168.1.1,192.168.1.2",
        expectedOutput: "192.168.1.0/24\n",
        recipeConfig: [
            {
                op: "Group IP addresses",
                args: ["Comma", 24, true],
            },
        ],
    },
    {
        name: "Group IP addresses: Only Subnets, 2 Group",
        input: "192.168.1.1,192.168.1.2,1.1.1.1,1.1.1.6",
        expectedOutput: "1.1.1.0/24\n192.168.1.0/24\n",
        recipeConfig: [
            {
                op: "Group IP addresses",
                args: ["Comma", 24, true],
            },
        ],
    },
    {
        name: "Group IP addresses: Just IPV4, 1 Group",
        input: "192.168.1.1,192.168.1.2",
        expectedOutput: "192.168.1.0/24\n  192.168.1.1\n  192.168.1.2\n\n",
        recipeConfig: [
            {
                op: "Group IP addresses",
                args: ["Comma", 24, false],
            },
        ],
    },
    {
        name: "Group IP addresses: Just IPV4, 2 Groups",
        input: "192.168.1.1,10.0.0.5",
        expectedOutput: "10.0.0.0/24\n  10.0.0.5\n\n192.168.1.0/24\n  192.168.1.1\n\n",
        recipeConfig: [
            {
                op: "Group IP addresses",
                args: ["Comma", 24, false],
            },
        ],
    },
    {
        name: "Group IP addresses: Just IPV6, 1 Group",
        input: "2001:0db8:85a3:0000:0000:8a2e:0370:7334,2001:0db8:85a3:0000:0000:8a2e:0370:7333",
        expectedOutput: "2001:d00::/24\n  2001:db8:85a3::8a2e:370:7334\n  2001:db8:85a3::8a2e:370:7333\n\n",
        recipeConfig: [
            {
                op: "Group IP addresses",
                args: ["Comma", 24, false],
            },
        ],
    },
    {
        name: "Group IP addresses: Just IPV6, 2 Groups",
        input: "2001:01b8:85a3:0000:0000:8a2e:0370:7334,2001:0db8:85a3:0000:0000:8a2e:0370:7333",
        expectedOutput: "2001:100::/24\n  2001:1b8:85a3::8a2e:370:7334\n\n2001:d00::/24\n  2001:db8:85a3::8a2e:370:7333\n\n",
        recipeConfig: [
            {
                op: "Group IP addresses",
                args: ["Comma", 24, false],
            },
        ],
    },
    {
        name: "Group IP addresses: IPV6 + 4, 1 Group",
        input: "192.168.1.1,2001:0db8:85a3:0000:0000:8a2e:0370:7334,2001:0db8:85a3:0000:0000:8a2e:0370:7333",
        expectedOutput: "192.168.1.0/24\n  192.168.1.1\n\n2001:d00::/24\n  2001:db8:85a3::8a2e:370:7334\n  2001:db8:85a3::8a2e:370:7333\n\n",
        recipeConfig: [
            {
                op: "Group IP addresses",
                args: ["Comma", 24, false],
            },
        ],
    },
]);
