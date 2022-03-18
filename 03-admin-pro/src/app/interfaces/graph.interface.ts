export interface Graph {
    type?: string;
    title?: string;
    bgColors?: string[];
    bgBorderColors?: string[];
    hoverBorderColors?: string[];
    hoverColors?: string[];
    labels: string[];
    data: number[];
}


export function createDefaultLabels() {
    throw new Error("Function not implemented.");
}

export function assignColors(colors: string[], length: number = colors.length): string[] {

    const colorList: string[] = [
        'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'
    ];
    const outputColors: string[] = [];

    colors.forEach(color => {
            let value = getComputedStyle(document.documentElement)
                .getPropertyValue(`--color-${color}`);
            outputColors.push(value);
 
    });

    return outputColors;
}