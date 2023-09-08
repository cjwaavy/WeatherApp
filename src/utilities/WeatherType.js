export const WeatherType = (type) => {
  switch (type) {
    case "ThunderStorm":
      return {
        icon: "zap",
        message: "It could get noisy",
        backgroundColor: "#000000"
      };
    case "Drizzle":
      return {
        icon: "cloud-rain",
        message: "It might rain a little",
        backgroundColor: "#36454f"
      };
    case "Rain":
      return {
        icon: "umbrella",
        message: "You will need an umbrella",
        backgroundColor: "#0000ff"
      };
    case "Snow":
      return {
        icon: "cloud-snow",
        message: "let's build a snowman!",
        backgroundColor: "#7f6065"
      };
    case "Clear":
      return {
        icon: "sun",
        message: "It is perfect t-shirt weather",
        backgroundColor: "#e47200"
      };
    case "Clouds":
      return {
        icon: "cloud",
        message: "You could live in the clouds",
        backgroundColor: "#363636"
      };
    case "Haze":
      return {
        icon: "wind",
        message: "It might be a bit damp",
        backgroundColor: "#58586e"
      };
    case "Mist":
      return {
        icon: "align-justify",
        message: "It might be hard to see",
        backgroundColor: "3e3e37"
      };
    default:
      return null;
  }
};