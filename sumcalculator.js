import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function SumCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSum = () => {
    if (num1 === "" || num2 === "") {
      alert("Please enter both numbers");
      return;
    }

    const sum = Number(num1) + Number(num2);
    setResult(sum);

    const record = `${num1} + ${num2} = ${sum}`;
    setHistory([record, ...history]);
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-center">Sum Calculator</h1>

            {/* Input Fields */}
            <div className="space-y-3">
              <Input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />

              <Input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Button className="w-full" onClick={handleSum}>
                Calculate Sum
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleClear}
              >
                Clear
              </Button>
            </div>

            {/* Result */}
            {result !== null && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-center text-xl font-semibold text-green-600"
              >
                Result: {result}
              </motion.div>
            )}

            {/* History */}
            {history.length > 0 && (
              <div className="pt-4">
                <h2 className="font-semibold mb-2">Calculation History</h2>
                <ul className="text-sm space-y-1 max-h-32 overflow-y-auto">
                  {history.map((item, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 rounded p-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
