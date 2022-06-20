import { useState, React } from "react";
import { Card, Button, Badge, Title } from "@mantine/core";

export default function IceCream({ propsEntry }) {
  const [entry, setEntry] = useState(propsEntry);

  const clickHandler = async (clickEntry) => {
    let { id, favorites } = clickEntry;
    favorites++;

    let response = await fetch(
      `https://backend-ice-cream-picker-2.herokuapp.com/ice_cream/${id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          ...clickEntry,
          favorites,
        }),
      }
    );

    response = await response.json();
    setEntry(response);
  };

  return (
    <div>
      <Card shadow="sm">
        <Title>{entry.flavor}</Title>
        <Badge>❤️ Likes: {entry.favorites}</Badge>
        <Button key={entry.id} onClick={() => clickHandler(entry)}>
          ❤️ Add Like
        </Button>
      </Card>
    </div>
  );
}
