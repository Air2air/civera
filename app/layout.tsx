"use client";

import { Inter } from "next/font/google";
import { Button, Callout, Flex } from "@tremor/react";
import { useState } from "react";
import "./globals.css";
import Search from "./components/Search";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Election tools by Civera",
//   description: "Generated by create next app",s
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <body
        className={`App ${darkMode ? "dark" : ""} ${
          inter.className
        } bg-white dark:bg-gray-900`}
        style={{ padding: 40 }}
      >
        <div className={`container mx-auto ${darkMode ? "dark" : ""}`}>
          <Callout
            className="mt-4 mb-8"
            title="A gradual approach for user engagement"
            icon={CheckCircleIcon}
            color="blue"
          >
            <div className="my-2">
              The intent is to not overwhelm the user with too many choices
              initially, but to entice them to drill down.
            </div>
            <div className="my-2">
              The top 3 cards are clickable summaries of the most critical
              information. A typical tab implementation happens on click.
            </div>
            <div className="my-2">
              The lower panel here just has placeholder stuff. In real life it
              includes the advanced search filters and whatever sorting and
              filtering is needed for the category.
            </div>
          </Callout>

          <Flex justifyContent="between" className="mb-4" alignItems="center">
            <div className="w-1/2">
              <Search />
            </div>
            <Button
              className="flex self-end"
              variant="secondary"
              onClick={toggleTheme}
            >
              {darkMode ? "Light" : "Dark"}
            </Button>
          </Flex>
          {children}
        </div>
      </body>
    </html>
  );
}
