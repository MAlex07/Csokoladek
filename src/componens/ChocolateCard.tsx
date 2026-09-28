interface ChocolateCard{
    name: string
    brand: string
    isDark: boolean
    cocoaPercentage: number
    ingridiets: string[]
}

export default function  Chocolate(props: ChocolateCard) {
    return(
        <div
        
        style = {{
            backgroundColor: props.isDark ? "#333": "#fff",
            color: props.isDark ? "#f2f2f2": "#000"
        }}

        >
            <p>Név: {props.name}</p>
            <p>Márka: {props.brand}</p>
            <p>Tipusa: {
                props.isDark ? "étcsoki": "tejcsoki"
                }</p>
            <p>Százalék: {props.cocoaPercentage}%</p>
            <p>Hozzávalók: {props.ingridiets.join(", ")}</p>
        </div>
    )
}