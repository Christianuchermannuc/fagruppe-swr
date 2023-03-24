import { Table, Tr, Th, Td } from "@dnb/eufemia";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import HomePage from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HomePage />
      <Table.ScrollView style={{ maxHeight: "18rem" }}>
        <Table sticky="css-position">
          <thead>
            <Tr>
              <Th>Column 1</Th>
              <Th>Column 2</Th>
              <Th>Column 3</Th>
              <Th>Column 4</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>Row 1</Td>
              <Td>Row 1</Td>
              <Td>Row 1</Td>
              <Td>Row 1</Td>
            </Tr>
            <Tr>
              <Td>Row 2</Td>
              <Td>Row 2</Td>
              <Td>Row 2</Td>
              <Td>Row 2</Td>
            </Tr>
            <Tr>
              <Td>Row 3</Td>
              <Td>Row 3</Td>
              <Td>Row 3</Td>
              <Td>Row 3</Td>
            </Tr>
            <Tr>
              <Td>Row 4</Td>
              <Td>Row 4</Td>
              <Td>Row 4</Td>
              <Td>Row 4</Td>
            </Tr>
            <Tr>
              <Td>Row 5</Td>
              <Td>Row 5</Td>
              <Td>Row 5</Td>
              <Td>Row 5</Td>
            </Tr>
            <Tr>
              <Td>Row 6</Td>
              <Td>Row 6</Td>
              <Td>Row 6</Td>
              <Td>Row 6</Td>
            </Tr>
            <Tr>
              <Td>Row 7</Td>
              <Td>Row 7</Td>
              <Td>Row 7</Td>
              <Td>Row 7</Td>
            </Tr>
            <Tr>
              <Td>Row 8</Td>
              <Td>Row 8</Td>
              <Td>Row 8</Td>
              <Td>Row 8</Td>
            </Tr>
            <Tr>
              <Td>Row 9</Td>
              <Td>Row 9</Td>
              <Td>Row 9</Td>
              <Td>Row 9</Td>
            </Tr>
            <Tr>
              <Td>Row 10</Td>
              <Td>Row 10</Td>
              <Td>Row 10</Td>
              <Td>Row 10</Td>
            </Tr>
            <Tr>
              <Td>Row 11</Td>
              <Td>Row 11</Td>
              <Td>Row 11</Td>
              <Td>Row 11</Td>
            </Tr>
            <Tr>
              <Td>Row 12</Td>
              <Td>Row 12</Td>
              <Td>Row 12</Td>
              <Td>Row 12</Td>
            </Tr>
          </tbody>
        </Table>
      </Table.ScrollView>
    </div>
  );
}

export default App;
