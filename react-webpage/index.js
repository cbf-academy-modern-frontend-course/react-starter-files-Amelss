function ClickButton() {
  return React.createElement(
    "button",
    {
      style: {
        backgroundColor: "#3392e4",
        color: "#fff",
        border: "0",
        padding: "10px 20px",
        fontWeight: "bold",
        borderRadius: "5px",
        fontSize: "1.1em",
      },
    },
    "1st React Button"
  );
}

const domContainer = document.querySelector("#root");

const root = ReactDOM.createRoot(domContainer);

root.render(React.createElement(ClickButton));
