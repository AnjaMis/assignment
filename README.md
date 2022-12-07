# Multi Step Form - Level 1 (React)

Your task is to **build a ticket-ordering frontend app in React** that:

1. Collects user input.
1. Preserves the state between steps.
1. Displays the collected information on the last step.
1. Makes the provided E2E tests pass.

Please agree with your hiring team regarding the tech stack choice.

Here's the mockup with hints:

<img width="750" alt="Mockup with hints" src="https://user-images.githubusercontent.com/1162212/138476002-0be62ddc-3ff5-4450-a7e1-52c47500660f.png">

Feel free to tweak the UI, but please ensure that the following HTML is in place.

### Navigation elements

Each screen of the application contains navigation links. There should be a link to every step of the wizard form. Each step of the form should also contain the "Submit" and "Back" buttons.

We use `data-testid` attributes to identify those elements, so make sure you provide them.

### The form steps

The inputs on the form steps should have the following `data-testid` attributes:

#### Step 1

```html
<form ...>
  <input data-testid="firstName" ... />
  <input data-testid="lastName" ... />
  <input data-testid="age" ... />
  <button data-testid="submit" />
</form>
```

#### Step 2

```html
<form ...>
  <input data-testid="phone" ... />
  <input data-testid="email" ... />
  <button data-testid="submit" />
  <button data-testid="back" />
</form>
```

#### Step 3

```html
<form ...>
  <input data-testid="seat" ... />
  <input data-testid="food" ... />
  <input data-testid="allergies" ... />
  <button data-testid="submit" />
  <button data-testid="back" />
</form>
```

#### Result

On the results page we expect to see the values collected by the form.
Each element containing the value should have a `data-testid` field with the corresponding `field name`:

```html
<div data-testid="<field name>">value</div>
<button data-testid="back" />
```

> Here we use `div` as an example element, in your application it can be a `tr`, `span` or any other element.

## Before you get started

#### Boilerplate

We have pre-uploaded a React/NextJS-based boilerplate under the /app-frontend directory. The boilerplate includes a few additional libraries (e.g. TailwindCSS). However, if you feel more confident with other libs, go ahead and use those instead (we just expect it to be a React-based app).

#### Try running the E2E tests locally

```bash
npm install
# Run your app here
npm run test
```

## What we expect from you

1. Fulfil the requirements in the task description above.
2. Push your code to the new `implementation` branch. We encourage you to commit and push your changes regularly as it's a good way for you to showcase your thinking process.
3. Create a new pull request, but please **do not merge it**.
4. Document the tech decisions you've made by creating a new review on your PR ([see how](https://www.loom.com/share/94ae305e7fbf45d592099ac9f40d4274)).
5. Await further instructions from the hiring team.

## Need help?

Start with [Troubleshooting](https://www.notion.so/Troubleshooting-d18bdb5d2ac341bb82b21f0ba8fb9546), and in case it didn't help, create a new GitHub issue. We'll get back to you.

## Time estimate

**30-90 minutes** depending on your experience level + the time to set up the project/environment and understand the task (go with one of the provided boilerplates to move faster). 

But don't worry! There is no countdown. This number is for you to plan your time.

---

Authored by [Maksim Ivanov](https://devskills.co/authors/maksim-ivanov) via [DevSkills](https://devskills.co).

How was your experience? **Give us a shout on [Twitter](https://twitter.com/DevSkillsHQ) / [LinkedIn](https://www.linkedin.com/company/devskills)**.
