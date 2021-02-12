# **Project Zero**

## **Motivations**

The reasons for creating and open-sourcing this library are quite straight forward. I like to iterate on ideas, libraries, and concepts in small demo applications. This is what helps me learn new concepts. The 
problem I have is that I keep rewriting the same UI components over and over and over...

So, the first logical step is to stick them in a library that can be re-used.

## **The Ideas**

There are two core ideas behind the structure of the components in this library.
1. Systemized styling
2. Accessible

### **Styling**

First, the styling follows a system. From font sizes, font weights, vertical spacing to colors. You can find these rules in the [DEFAULT_THEME](./packages/components/default-theme.ts). This theme is a direct representation of my styleguide that I've designed along the way in Figma. 

### **Accessibility**
The second is that these components should be accessible out of the box. By doing this I ensure that any demo applications I create will work for anyone. When I say accessible I mean, they *should* work with keyboard and screen-reading software.

---

## **Getting Started**

If you're reading this then you should be aware of two core assumptions before using this project. 

First, you'd like to use this in a React based project. 

Second, you are happy to bring in two hard dependencies into your project. These  are [styled-components](https://github.com/styled-components/styled-components) and [styled-system](https://github.com/styled-system/styled-system).

---

### **Install**

Run either of these from the CLI in your project:

- `npm install @project-zero/components`
- `yarn add @project-zero/components`

Then import the components you need, along with the ThemeProvider. This applies the default theme. Theme properties are configurable.

```js
import { Button, ThemeProvider } from "@project-zero/components";

<ThemeProvider>
  <Button>Default</Button>
</ThemeProvider>;
```

---

## **Components**

### **Alert**

An alert displays a brief, important message. It does this in a way that attracts the user's attention without interrupting their task.

```jsx
import { Alert } from "@project-zero/components";

<Alert type="success" active>
  Content
</Alert>;
```

---

### **Box**

Everything in web design is a box, or the absence of a box. This is both the most used and extended component.

```jsx
import { Box } from "@project-zero/components";

<Box width={[1, 1 / 2]} p={4} mb={3} bg="#eee">
  Content
</Box>;
```

---

### **Breadcrumbs**

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

### **Button**

Enables users to trigger an action or event. E.g - submitting a form, opening a dialog, canceling an action, or performing a delete operation.

```jsx
import { Button } from "@project-zero/components";

<Button variant="primary" onClick={handleOnClick}>
  Primary Default
</Button>;
```

---

### **Card**

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

### **Clipboard**

A light variant of the `Button` component. The difference is that it interacts with the `navigator.clipboard` API.

```jsx
import { Clipboard } from "@project-zero/components";

<Clipboard text="Text to copy" />;
```

---

### **Combobox**

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

### **Flex**

A box. But, flexible.

```jsx
import { Flex } from "@project-zero/components";

<Flex justifyContent="space-around" bg="#eee">
  <p>Child one</p>
  <p>Child two</p>
</Flex>;
```

---

### **Heading**

Use these to give some hierarchy to a section in a page.

```jsx
import { Heading } from "@project-zero/components";

<Heading variant="medium">Heading Component</Heading>;
```

---

### **Image**

An HTML image element wrapped in the `AspectRatio` padding-bottom trick. Defaults to an aspect ratio of `9 / 16`.

```jsx
import { Image } from "@project-zero/components";

<Image src="test" alt="" />;
```

---

### **Link**

Provides a reference to a resource. The target resource can be either external or local.

```jsx
import { Link } from "@project-zero/components";

<Link href="#" onPress={handleOnPress}>
  Primary Default
</Link>;
```

---

### **SkipLink**

This allows keyboard users to skip ahead and navigate to the main content areas of a page.

```jsx
import { SkipLink } from "@project-zero/components";

<SkipLink id="main-content">Skip to Content</SkipLink>;
```

---

### **Stack**

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

### **Tabs**

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

### **Text**

Applies the smaller text variants such as regular body text or smaller body text.

```jsx
import { Text } from "@project-zero/components";

<Text>Text Component</Text>;
```

---

### **VisuallyHidden**

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