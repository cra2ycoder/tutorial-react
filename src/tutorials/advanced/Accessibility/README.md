# Accessibility

**Disclaimer:**
Accessibility(a11y) is huge topic to learn! so we need to go through
the a11y guidelines before we get into start with React. So, I will create a new repository for learning only accessibility in future. Hence, I am leaving this in half of a way!

- also known as `a11y`

  - how its named as `a11y`, see below:
  - a -> c c e s s i b i l i t -> y
  - a -> 1 2 3 4 5 6 7 8 9 10 11

- React is fully supports building accessible websites

## WCAG

- Expands `Web Content Accessibility Guidelines`
- https://www.w3.org/WAI/standards-guidelines/wcag/
- Three level of checklists
  - Level A (Beginner)
  - Level AA (Intermediate)
  - Level AAA (Advanced)
- Reference Links:
  - https://a11yproject.com/checklist.html
  - https://www.wuhcag.com/wcag-checklist/
  - https://webaim.org/standards/wcag/checklist

## WAI-ARIA

- Expands `Web Accessibility Initiative - Accessible Rich Internet Applications`
- techniques for building fully accessible **javascript widgets**
- example, where we used to specify the `aria-` is from this guidelines
- these properties/attributes should be hyphen-cased (means as per HTML standard) not camelCase

```html
<input aria-label="label-text" aria-required="true" />
```

## Semantic HTML

- foundation of accessibility in a web application
- using the various html tags as per semantic standard will strong the accessibility of our websites
- often using the semantic tags - accessibility will be free by default
- Best reference link:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element

## Accessible Forms

- `label` tag must be added with form control tags such as `input, textarea...etc.,`
- `for` replaces as `htmlFor` in React

```html
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name" />
```

## Notifying the user of errors

- All Error situations needs to be understood by all users

## Focus Control

- Our website should be operated with keyboard actions as well
