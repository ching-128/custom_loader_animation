let loader = document.querySelectorAll(".loader");
let model_customization = document.querySelector(".model_customization");
let model_bg = model_customization.querySelector(".model_bg");
let model_customization_btn_close = document.querySelector(".model_customization_btn_close");

model_bg.addEventListener("click", () => hideModelCustomization());
model_customization_btn_close.addEventListener("click", () => hideModelCustomization());

for (let i = 0; i < loader.length; i++) {
    loader[i].addEventListener("click", () => {
        showModelCustomization();

        // get inner child element]

        const tempElement = document.createElement("div");
        document.body.appendChild(tempElement);

        let custom_loader = loader[i].firstElementChild;

        let defaultStyle = window.getComputedStyle(tempElement);
        let computedStyle = window.getComputedStyle(custom_loader);

        for (let property of computedStyle) {
            if (computedStyle.getPropertyValue(property) !== defaultStyle.getPropertyValue(property)) {
                console.log(`${property}: ${computedStyle.getPropertyValue(property)}`);
            }
        }

        // Remove the temporary element
        document.body.removeChild(tempElement);

    });
}

const showModelCustomization = () => model_customization.classList.add("active");
const hideModelCustomization = () => model_customization.classList.remove("active");