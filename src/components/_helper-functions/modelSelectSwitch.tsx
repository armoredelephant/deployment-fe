const models = {
  computer: [
    "Dell 5175",
    "Dell 5400",
    "Dell 5480",
    "Dell 5520",
    "Dell 5530",
    "Dell 5540",
    "Dell 7040",
    "Dell 7270",
    "Dell 7480",
    "Dell 4300",
    "HP 640",
    "HP 650",
    "HP 8200",
    "HP 8300",
    "HP 1011",
    "HP 850",
    "HP 8570",
    "HP 800",
    "HP 400",
    "Igel UD3",
    "Lenovo T495",
    "Lenovo P53",
    "Lenovo X1"
  ],
  network: ["Meraki Z1", "Meraki Z3", "Meraki MX64"],
  other: [
    "SID700",
    "Dell WD19",
    "HP UltraSlim Dock",
    "HP 90W Dock",
    "Lenovo Dock Gen2",
    "Viewsonic VA2446mh",
    "Viewsonic VA2446m",
    "Viewsonic VA2406m"
  ],
  phone: ["Cisco 7942", "Cisco 8845", "Cisco 8941", "Cisco 8945"]
};
export function modelSelectSwitch(model: string): string[] {
  switch (model) {
    case "Computer":
      return models.computer;
    case "Network Device":
      return models.network;
    case "Other":
      return models.other;
    case "Phone":
      return models.phone;
    default:
      return [""];
  }
}
