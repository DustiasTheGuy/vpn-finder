export class Products {
    public products: Array<Product> = [{ 
        imageURL: "/assets/images/vs.png",
        label: "VirtualShield VPN",
        description: "With excellent reviews and a 30 day money back guarantee there are very few reasons not to try this reliable VPN. This VPN provider ranks at the very top of our recommended list.",
        link: "https://virtualshield.com/?rfsn=4860654.25c305",
        features: [
          { key: "Money Back Guarantee", value: ["30 Days"] },
          { key: "Multiple Devices", value: ["15 Devices"] },
          { key: "Support", value: ["Live Chat", "FAQ"] },
          { key: "Supported Platforms", value: ["Windows 7+", "iOS", "Linux", "Android"] }
        ]  
      }, 
      { 
        imageURL: "/assets/images/ws.png", 
        label: "windscribe VPN", 
        description: "Windscribe is one of our absolute favorite VPN provider. They do not only provide 10 free GB of data every month but also have a wide selection of countries and extremely reliable servers. They suppport a wide range of platforms.",
        link: "https://windscribe.com/?affid=ts8ndjip",
        features: [
          { key: "Money Back Guarantee", value: ["30 Days"] },
          { key: "Free Data", value: ["10GB Month"] },
          { key: "Locations", value: ["500+"] },
          { key: "Supported Platforms", value: ["Windows 7+", "iOS", "Linux", "Android"] }
        ] 
      }, 
      { 
        imageURL: "/assets/images/hma.png",
        label: "hide my ass VPN", 
        description: "This VPN provider also makes the top list of reliable vpn providers. With their 30 days money back guarantee there's no risk associated with trying them out.",
        link: "https://click.hmavpn.com/aff_c?offer_id=1&aff_id=1784" ,
        features: [ 
          { key: "Money Back Guarantee", value: ["30 Days"] },
          { key: "Countries", value: ["190+"] },
          { key: "Discount", value: ["72%"] },
          { key: "Supported Platforms", value: ["Windows 7+", "iOS", "Linux", "Android"] }
        ] 
      },
      {
        imageURL: "https://www.wizcase.com/wp-content/uploads/2018/06/ProtonVPN20-20Logo20-20Vertical-300x297.png",
        label: "ProtonVPN",
        description: "",
        link: "https://go.getproton.me/aff_c?offer_id=6&aff_id=2082",
        features: [
          { key: "Money Back Guarantee", value: ["30 Days"] },
          { key: "Free Data", value: ["500MB Month"]},
          { key: "Supported Platforms", value: ["Windows 7+", "iOS", "Linux", "Android"] }
        ]
      }
    ];
}


declare interface Feature {
    key: string;
    value: Array<string>;
}

export interface Product {
    imageURL: string;
    label: string;
    description: string;
    link: string;
    features: Array<Feature>;
};