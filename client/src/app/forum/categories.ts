export class Categories {
    private categories: string[] = [
        "Frequently Asked Questions",
        "Security Related",
        "Virtual Private Networks",
        "General Questions",
        "Other"
    ];

    private tableData: table[] = [
        {
            category: "Frequently Asked Questions",
            data: []
        },
        {
            category: "Security Related",
            data: []
        },
        {
            category: "Virtual Private Networks",
            data: []
        },
        {
            category: "General Questions",
            data: []
        }
    ]

    constructor() {
  
    }

    sortTopics(unsorted): table[] {
        return unsorted;
    }
    
    getCategories(): string[] {
        return this.categories; 
    } 
}

export interface table {
    category: string;
    data: any[];
}