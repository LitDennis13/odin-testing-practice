import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./script.js"

describe("Capitalize Tests", () => {
    test("Capitalize Exists", () => {
        expect(capitalize).toBeDefined();
    });

    const inputExpectedOutput = [
        ["hello, World!","Hello, World!"],
        ["many people eat cereal for breakfast","Many people eat cereal for breakfast"],
        ["ted goes to the gym and exercises three times a week","Ted goes to the gym and exercises three times a week"]
    ];

    for (let i = 0; i < inputExpectedOutput.length; i++) {
        test(`Capitalize Test ${i+1}`, () => {
            const testInput = inputExpectedOutput[i][0];
            const expectedOutput = inputExpectedOutput[i][1];
            expect(capitalize(testInput)).toBe(expectedOutput);
        });
    }
});

describe("Reverse String Tests", () => {
    test("Reverse String Exists", () => {
        expect(reverseString).toBeDefined();
    });

    const inputExpectedOutput = [
        ["!dlroW ,olleH","Hello, World!"],
        ["semaG cipE","Epic Games"],
        ["semaG giB","Big Games"]
    ];

    for (let i = 0; i < inputExpectedOutput.length; i++) {
        test(`Reverse String Test ${i+1}`, () => {
            const testInput = inputExpectedOutput[i][0];
            const expectedOutput = inputExpectedOutput[i][1];
            expect(reverseString(testInput)).toBe(expectedOutput);
        });
    }
});


describe("Calculator Tests", () => {
    test("Calculator Exists", () => {
        expect(calculator).toBeDefined();
    });

    describe("Calculator Addition Tests", () => {
        test("Calculator Addition Exists", () => {
            expect(calculator.add).toBeDefined();
        });

        const inputExpectedOutput = [
            [[33,32],65],
            [[87,23],110],
            [[45,92],137]
        ];

        for (let i = 0; i < inputExpectedOutput.length; i++) {
            test(`Calculator Addition Test ${i+1}`, () => {
                const firstNumber = inputExpectedOutput[i][0][0];
                const secondNumber = inputExpectedOutput[i][0][1];
                const expectedOutput = inputExpectedOutput[i][1];
                expect(calculator.add(firstNumber,secondNumber)).toBe(expectedOutput);
            });
        }
    }); 

    describe("Calculator Subtraction Tests", () => {
        test("Calculator Subtraction Exists", () => {
            expect(calculator.subtract).toBeDefined();
        });

        const inputExpectedOutput = [
            [[33,32],1],
            [[87,23],64],
            [[45,92],-47]
        ];
        
        for (let i = 0; i < inputExpectedOutput.length; i++) {
            test(`Calculator Subtraction Test ${i+1}`, () => {
                const firstNumber = inputExpectedOutput[i][0][0];
                const secondNumber = inputExpectedOutput[i][0][1];
                const expectedOutput = inputExpectedOutput[i][1];
                expect(calculator.subtract(firstNumber,secondNumber)).toBe(expectedOutput);
            });
        }
        
    }); 

    describe("Calculator Multiplication Tests", () => {
        test("Calculator Multiplication Exists", () => {
            expect(calculator.multiply).toBeDefined();
        });

        const inputExpectedOutput = [
            [[5,4],20],
            [[6,9],54],
            [[12,8],96]
        ];
        
        for (let i = 0; i < inputExpectedOutput.length; i++) {
            test(`Calculator Multiplication Test ${i+1}`, () => {
                const firstNumber = inputExpectedOutput[i][0][0];
                const secondNumber = inputExpectedOutput[i][0][1];
                const expectedOutput = inputExpectedOutput[i][1];
                expect(calculator.multiply(firstNumber,secondNumber)).toBe(expectedOutput);
            });
        }
        
    });

    describe("Calculator Division Tests", () => {
        test("Calculator Division Exists", () => {
            expect(calculator.divide).toBeDefined();
        });

        const inputExpectedOutput = [
            [[40,10],4],
            [[77,11],7],
            [[12,4],3]
        ];
        
        for (let i = 0; i < inputExpectedOutput.length; i++) {
            test(`Calculator Division Test ${i+1}`, () => {
                const firstNumber = inputExpectedOutput[i][0][0];
                const secondNumber = inputExpectedOutput[i][0][1];
                const expectedOutput = inputExpectedOutput[i][1];
                expect(calculator.divide(firstNumber,secondNumber)).toBe(expectedOutput);
            });
        }
        
    });
});

describe("Caesar Cipher Tests", () => {
    test("Caesar Cipher Exists", () => {
        expect(caesarCipher).toBeDefined();
    });

    test("Caesar Cipher Works Test", () => {
        expect(caesarCipher("it works")).toBe("lw zrunv");
    });

    test("Caesar Cipher A to Z Wrapping Test", () => {
        expect(caesarCipher("abcxyz")).toBe("defabc");
    });

    test("Caesar Cipher Case Retained Test", () => {
        expect(caesarCipher("Epic Games")).toBe("Hslf Jdphv");
    });

    test("Caesar Cipher Punctuation Test", () => {
        expect(caesarCipher("Hello, World!")).toBe("Khoor, Zruog!");
    });
});

describe("Analyze Array Tests", () => {
    test("Analyze Array Exists", () => {
        expect(analyzeArray).toBeDefined();
    });

    describe("Returns Correct Object", () => {
        test("Analyze Array Object Exists", () => {
            expect(analyzeArray()).toBeDefined();
        });

        test("Analyze Array Average Exists", () => {
            expect(analyzeArray().average).toBeDefined();
        });
        
        test("Analyze Array Min Exists", () => {
            expect(analyzeArray().min).toBeDefined();
        });

        test("Analyze Array Max Exists", () => {
            expect(analyzeArray().max).toBeDefined();
        });

        test("Analyze Array Length Exists", () => {
            expect(analyzeArray().length).toBeDefined();
        });
    });

    const inputExpectedOutput = [
        [[4,5,6,4,2,3,4,5,6],{average: 4, min: 2, max: 6, length: 9}],
        [[4,5,6,2,4,65,3,5,6,2,23],{average: 11, min: 2, max: 65, length: 11}],
    ];

    for (const inputOutput of inputExpectedOutput) {
        describe(`Analyze Array ${inputOutput[0]} Test`, () => {
            test(`Analyze Array Average [${inputOutput[0]}]`, () => {
                expect(analyzeArray(inputOutput[0]).average).toBe(inputOutput[1].average);
            });
            
            test(`Analyze Array Min [${inputOutput[0]}]`, () => {
                expect(analyzeArray(inputOutput[0]).min).toBe(inputOutput[1].min);
            });
    
            test(`Analyze Array Max [${inputOutput[0]}]`, () => {
                expect(analyzeArray(inputOutput[0]).max).toBe(inputOutput[1].max);
            });
    
            test(`Analyze Array Length [${inputOutput[0]}]`, () => {
                expect(analyzeArray(inputOutput[0]).length).toBe(inputOutput[1].length);
            });
        });
    }

    
});