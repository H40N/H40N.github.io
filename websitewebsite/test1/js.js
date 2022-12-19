let button = document.getElementById("lightdarkmodebutton");
const rootElement = document.documentElement.style;





button.onclick = () => {
    if (button.innerHTML == "mörker") {
        button.innerHTML = "ljus";
        rootElement.setProperty("--background", "hsl(0, 0%, 10%)");
        rootElement.setProperty("--gray1", "hsl(0, 0%, 90%)");
        rootElement.setProperty("--gray2", "hsl(0, 0%, 85%)");
        rootElement.setProperty("--gray3", "hsl(0, 0%, 80%)");
        rootElement.setProperty("--gray4", "hsl(0, 0%, 70%)");
        rootElement.setProperty("--gray5", "hsl(0, 0%, 60%)");
        rootElement.setProperty("--gray6", "hsl(0, 0%, 50%)");
        rootElement.setProperty("--gray7", "hsl(0, 0%, 40%)");
        rootElement.setProperty("--gray8", "hsl(0, 0%, 30%)");
        rootElement.setProperty("--gray9", "hsl(0, 0%, 20%)");
        rootElement.setProperty("--gray10", "hsl(0, 0%, 10%)");
    } else if (button.innerHTML == "ljus") {
        button.innerHTML = "mörker";
        rootElement.setProperty("--background", "hsl(0, 0%, 100%)");
        rootElement.setProperty("--gray1", "hsl(0, 0%, 10%)");
        rootElement.setProperty("--gray2", "hsl(0, 0%, 20%)");
        rootElement.setProperty("--gray3", "hsl(0, 0%, 30%)");
        rootElement.setProperty("--gray4", "hsl(0, 0%, 40%)");
        rootElement.setProperty("--gray5", "hsl(0, 0%, 50%)");
        rootElement.setProperty("--gray6", "hsl(0, 0%, 60%)");
        rootElement.setProperty("--gray7", "hsl(0, 0%, 70%)");
        rootElement.setProperty("--gray8", "hsl(0, 0%, 80%)");
        rootElement.setProperty("--gray9", "hsl(0, 0%, 85%)");
        rootElement.setProperty("--gray10", "hsl(0, 0%, 90%)");
    }
} 