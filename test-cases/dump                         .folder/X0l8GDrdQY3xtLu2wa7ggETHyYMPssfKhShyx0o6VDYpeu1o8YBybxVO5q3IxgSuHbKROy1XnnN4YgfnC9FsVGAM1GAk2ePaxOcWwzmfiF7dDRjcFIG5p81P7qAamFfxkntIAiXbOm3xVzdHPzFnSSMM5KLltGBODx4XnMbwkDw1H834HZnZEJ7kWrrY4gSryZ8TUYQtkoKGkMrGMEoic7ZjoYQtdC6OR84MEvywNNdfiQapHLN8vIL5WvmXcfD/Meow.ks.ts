import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.closeBrowser();
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "55cfef08-bae7-4dfa-8687-2f95a4763e69",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: { "md5.v1": "3caec008087ccb7a1cb3fc698fbf83c2" },
    name: "a - Make Appointment",
    selectors: [
      {
        id: "f9f1e6b9-7a8b-4e04-b88f-30a5224802a5",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "e132190a-d532-48b3-8111-4601a8165925",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "7fcc2a09-0494-4e01-8184-3f90ce5e3a65",
    attributes: {
      type: "text",
      class: "form-control",
      id: "txt-username",
      name: "username",
      placeholder: "Username",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
    name: "input - Username",
    selectors: [
      {
        id: "e3f72c41-e475-4251-bd53-3466968409a4",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "366f2221-f342-495f-802d-0b51f9d14c12",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "7fcc2a09-0494-4e01-8184-3f90ce5e3a65",
      attributes: {
        type: "text",
        class: "form-control",
        id: "txt-username",
        name: "username",
        placeholder: "Username",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
      name: "input - Username",
      selectors: [
        {
          id: "e3f72c41-e475-4251-bd53-3466968409a4",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "366f2221-f342-495f-802d-0b51f9d14c12",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "abc"
  );
  await web.click({
    type: "Web",
    id: "14ac9a36-ba14-4300-9d0f-28cef9dae2e3",
    attributes: {
      type: "password",
      class: "form-control",
      id: "txt-password",
      name: "password",
      placeholder: "Password",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
    name: "input - Password",
    selectors: [
      {
        id: "035b076c-93f1-4d11-8239-8c51b538ad30",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "ecabddc9-f784-4101-b57f-19f21c4c6cff",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setEncryptedText(
    {
      type: "Web",
      id: "14ac9a36-ba14-4300-9d0f-28cef9dae2e3",
      attributes: {
        type: "password",
        class: "form-control",
        id: "txt-password",
        name: "password",
        placeholder: "Password",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
      name: "input - Password",
      selectors: [
        {
          id: "035b076c-93f1-4d11-8239-8c51b538ad30",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "ecabddc9-f784-4101-b57f-19f21c4c6cff",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "4fa9d3dd5cb63119e614cf2453e9f336-U2FsdGVkX1+hPXWb884XPodZyn59oipL4zT17pl8WTU="
  );
  await web.click({
    type: "Web",
    id: "1e6d31d1-052a-4003-b92e-20b4472bd681",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "32ecb7db-bc9e-4c44-ace0-afd7dc25f3a1",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "ab9cc24f-5f66-411b-986e-d6d50528d1d1",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "d8b9109e-4246-4885-8c66-756e4f7a1928",
    attributes: {
      type: "text",
      class: "form-control",
      id: "txt-username",
      name: "username",
      placeholder: "Username",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
    name: "input - Username",
    selectors: [
      {
        id: "8d3c2900-9dfb-4343-8b8b-5fb8f225c36e",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "78857505-3f9a-4fa4-8055-2bdb6373384a",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "d8b9109e-4246-4885-8c66-756e4f7a1928",
      attributes: {
        type: "text",
        class: "form-control",
        id: "txt-username",
        name: "username",
        placeholder: "Username",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
      name: "input - Username",
      selectors: [
        {
          id: "8d3c2900-9dfb-4343-8b8b-5fb8f225c36e",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "78857505-3f9a-4fa4-8055-2bdb6373384a",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "hiepvu"
  );
  await web.setEncryptedText(
    {
      type: "Web",
      id: "75507cac-4746-4fc0-90b2-0afe4484ab28",
      attributes: {
        type: "password",
        class: "form-control",
        id: "txt-password",
        name: "password",
        placeholder: "Password",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
      name: "input - Password",
      selectors: [
        {
          id: "f2157b39-69d7-4fbb-bec9-09b115d1975e",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "7a5927f0-20e8-41ee-b2c2-429ac78ea9b6",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "8df036d815cb5e41d7117cfa83dfffc9-U2FsdGVkX1+IUrtnPwEqRNxddlrazNYA18GeMge32Gg="
  );
});