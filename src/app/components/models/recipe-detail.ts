export class RecipeDetail {
    title: string;
    description: string;
    images: string[];
    time: string;
    serves: number;
    ingrediants: string[];
    steps: string[]
}

export class Media {
    link: string;

}

enum MediaType {
    image,
    video
}