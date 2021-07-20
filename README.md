# ds-task

Project is available publicly here: https://ds-task123.netlify.app

### Run project locally
```
npm install
npm run serve
```

### Assumptions
- Website should work on all modern browsers. IE is not supported.
- Website is fully responsive. It should work on mobile, tablet and desktop.
- vue-atlaskit is used as a UI library.
- Website scores high on Google Lighthouse.
- Website is a SPA without Server Side Rendering.
- Submitted data is saved in the Session Storage. In UserService.ts file, you can easily change this to connect to an existing API.

### Applied techniques
- Project was created using vue-cli, which is a standard way of creating Vue projects.
- vue-router is used to provide client-side navigation
- CSS Flexbox and CSS Grid are used for laying out content.
- TypeScript is used to provide type checking and better IDE support.
- vee-validate library is used to make form validation easier.
- SCSS is used instead of plain CSS. This allows nesting CSS rules and creating variables.

### Alternative solutions
- Scaffold project using Nuxt.js instead of vue-cli. This would result in better SEO.
- Write form validation by yourself instead of using vee-validate. This would be more time-consuming and it would produce more boilerplate.
- Do not use vue-atlaskit. Instead create controls from scratch. This would be more time-consuming (especially for date control).
- Create a different navbar layout.
- Use React instead of Vue.
- Create hamburger menu on mobiles. This would be necessary only if we would have more navigation links than two.

### Other comments
- When there is enough space in the viewport, the footer stays at the bottom of the screen. When there is no space in the viewport, the footer stays after the content.
- Form is validated on submit, input change and input unfocus.
- When clicking "Submit" and there is an error, the page is scrolled to the first one.
- Avatar image is not required.
- Avatar image must be jpg, jpeg or png file.
- Avatar image cannot have bigger size than 2MB.
- "About" field is not required.
- "Phone" field accepts only digits, spaces and "+" character.