# **Components**

## **Alert**

An alert displays a brief, important message. It does this in a way that attracts the user's attention without interrupting their task.

```jsx
import { Alert } from "@project-zero/components";

<Alert type="success" active>
  Content
</Alert>;
```

---

## **Box**

Everything in web design is a box, or the absence of a box. This is both the most used and extended component.

```jsx
import { Box } from "@project-zero/components";

<Box width={[1, 1 / 2]} p={4} mb={3} bg="#eee">
  Content
</Box>;
```

---

## **Breadcrumbs**

A list of links to the parent pages of the current page in hierarchical order.

```jsx
import { Breadcrumbs } from "@project-zero/components";

<Breadcrumbs>
  <Breadcrumbs.Link href="#home">Home</Breadcrumbs.Link>
  <Breadcrumbs.Link href="#about">About</Breadcrumbs.Link>
  <Breadcrumbs.Link href="#writing" selected>
    Writing
  </Breadcrumbs.Link>
</Breadcrumbs>;
```

---

## **Button**

Enables users to trigger an action or event. E.g - submitting a form, opening a dialog, canceling an action, or performing a delete operation.

```jsx
import { Button } from "@project-zero/components";

<Button variant="primary" onClick={handleOnClick}>
  Primary Default
</Button>;
```

---

## **Card**

A composition that contains display content and actions for some specific topic.

```jsx
import { Card } from "@project-zero/components";

<Card
  title="Title"
  description="Short Description"
  image="https://source.unsplash.com/user/erondu/500x500"
  actions={
    <Button variant="light" onClick={handleOnClick}>
      Action
    </Button>
  }
/>;
```

---

## **Clipboard**

A light variant of the `Button` component. The difference is that it interacts with the `navigator.clipboard` API.

```jsx
import { Clipboard } from "@project-zero/components";

<Clipboard text="Text to copy" />;
```

---

## **Combobox**

A combobox consists of a single-line textbox and an associated pop-up element.  It helps a user set the value of the textbox.

```jsx
import { ComboBox } from "@project-zero/components";

const DEFAULT_OPTIONS = ["a", "b", "c"];
const DEFAULT_PROPS = {
  options: DEFAULT_OPTIONS,
  id: "test",
  label: "test",
  placholder: "Please enter some text...",
};

<ComboBox {...DEFAULT_PROPS} />;
```

---

## **Flex**

A box. But, flexible.

```jsx
import { Flex } from "@project-zero/components";

<Flex justifyContent="space-around" bg="#eee">
  <p>Child one</p>
  <p>Child two</p>
</Flex>;
```

---

## **Heading**

Use these to give some hierarchy to a section in a page.

```jsx
import { Heading } from "@project-zero/components";

<Heading variant="medium">Heading Component</Heading>;
```

---

## **Image**

An HTML image element wrapped in the `AspectRatio` padding-bottom trick. Defaults to an aspect ratio of `9 / 16`.

```jsx
import { Image } from "@project-zero/components";

<Image src="test" alt="" />;
```

---

## **Link**

Provides a reference to a resource. The target resource can be either external or local.

```jsx
import { Link } from "@project-zero/components";

<Link href="#" onPress={handleOnPress}>
  Primary Default
</Link>;
```

---

## **SkipLink**

This allows keyboard users to skip ahead and navigate to the main content areas of a page.

```jsx
import { SkipLink } from "@project-zero/components";

<SkipLink id="main-content">Skip to Content</SkipLink>;
```

---

## **Stack**

One of my personal favourites. A layout primitive that applies systemized vertical spacing.

```jsx
import { Stack } from "@project-zero/components";

<Stack bg="#eee">
  <span>Child one</span>
  <span>Child two</span>
  <span>Child three</span>
</Stack>;
```

---

## **Tabs**

Tabs are a set of layered sections of content, known as tab panels. One panel of content is displayed at a time.

```jsx
import { Tabs } from "@project-zero/components";

<Tabs.Container>
  <Tabs.List justifyContent="space-between">
    <Tabs.Tab>Tab one</Tabs.Tab>
    <Tabs.Tab>Tab two</Tabs.Tab>
    <Tabs.Tab>Tab three</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panels>
    <Tabs.Panel>Content for tab one</Tabs.Panel>
    <Tabs.Panel>Conetent for tab two</Tabs.Panel>
    <Tabs.Panel>Content for tab three</Tabs.Panel>
  </Tabs.Panels>
</Tabs.Container>;
```

---

## **Text**

Applies the smaller text variants such as regular body text or smaller body text.

```jsx
import { Text } from "@project-zero/components";

<Text>Text Component</Text>;
```

---

## **VisuallyHidden**

Produces the opposite effect of The `aria-hidden="true"` attribute. Sighted users won't see it but screen readers will.

```jsx
import React from "react";
import { VisuallyHidden } from "@project-zero/components";

function IconUi() {
  return (
    <React.Fragment>
      <svg
        viewBox="0 0 32 32"
        width={"1em"}
        height={"1em"}
        fill="none"
        stroke={"currentcolor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={4}
      >
        <path d="M12 30 L24 16 12 2" />
      </svg>
      <VisuallyHidden>Arrow Right</VisuallyHidden>
    </React.Fragment>
  );
}
```

---