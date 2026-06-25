const db = [
    {
        item: "Manjal 50g",
        group: "GROCERY",
        variant: [
            {
                mrp: 20.00,
                price: 18.00,
                isExpired: false
            },
            {
                mrp: 19.00,
                price: 17.00,
                isExpired: true
            }
        ]
    },
    {
        item: "Infinix",
        group: "MOBILE",
        variant: [
            {
                mrp: 24999,
                price: 24499,
                model: "Note 50s",
                spec: "8+128"
            },
            {
                mrp: 20999,
                price: 20499,
                model: "Note 50s",
                spec: "4+64"
            }
        ]
    }
];

export default db;