/**
 * Extract IP Addresses tests.
 *
 * @author h345983745
 *
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

import TestRegister from "../TestRegister";

TestRegister.addTests([
    {
        name: "Extract IP Addresses: nothing",
        input: "",
        expectedOutput: "",
        recipeConfig: [
            {
                op: "Extract IP addresses",
                args: [true, false, false, false],
            },
        ],
    }, {
        name: "Extract IP Addresses: IPV4 Only",
        input: "192.168.1.1 RANDOM_DATA 192.168.1.2  RANDOM_DATA     2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        expectedOutput: "192.168.1.1\n192.168.1.2\n",
        recipeConfig: [
            {
                op: "Extract IP addresses",
                args: [true, false, false, false],
            },
        ],
    }, {
        name: "Extract IP Addresses: IPV6 Only",
        input: "RANDOM_DATA 192.168.1.2 RANDOM_DATA 2001:0db8:85a3:0000:0000:8a2e:0370:7334 RANDOM_DATA ",
        expectedOutput: "2001:0db8:85a3:0000:0000:8a2e:0370:7334\n",
        recipeConfig: [
            {
                op: "Extract IP addresses",
                args: [false, true, false, false],
            },
        ],
    },

    // TODO: Will output both IPV4 + 6 due to IPV6 Regex
    // {
    //     name: "Extract IP Addresses: IPV6 Shorthand",
    //     input: "192.168.1.1 RANDOM_DATA 192.168.1.2 RANDOM_DATA 2001:db8:85a3::8a2e:370:7334",
    //     expectedOutput: "2001:db8:85a3::8a2e:370:7334",
    //     recipeConfig: [
    //         {
    //             op: "Extract IP addresses",
    //             args: [false, true, false, false],
    //         },
    //     ],
    // },

    {
        name: "Extract IP Addresses: IPV4 and IPV6",
        input: "RANDOM_DATA 192.168.1.2 RANDOM_DATA 2001:0db8:85a3:0000:0000:8a2e:0370:7334 RANDOM_DATA ",
        expectedOutput: "192.168.1.2\n2001:0db8:85a3:0000:0000:8a2e:0370:7334\n",
        recipeConfig: [
            {
                op: "Extract IP addresses",
                args: [true, true, false, false],
            },
        ],
    },
    {
        name: "Extract IP Addresses: IPV4 - No Local Addresses",
        input: "RANDOM_DATA 192.168.1.2 RANDOM_DATA 1.1.1.1",
        expectedOutput: "1.1.1.1\n",
        recipeConfig: [
            {
                op: "Extract IP addresses",
                args: [true, false, true, false],
            },
        ],
    },
    {
        name: "Extract IP Addresses: Correct Total",
        input: "1.1.1.1 1.1.1.1",
        expectedOutput: "Total found: 2\n\n1.1.1.1\n1.1.1.1\n",
        recipeConfig: [
            {
                op: "Extract IP addresses",
                args: [true, false, false, true],
            },
        ],
    },


]);
