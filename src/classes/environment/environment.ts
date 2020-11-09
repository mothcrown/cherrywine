
export interface EnvironmentConstructor {
    new (size: number): Environment;
}

export interface Environment {
    type: string
    size: number
    textures: Array<string>
    generate(): void
}