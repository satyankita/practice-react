export const initialState = [
    {id: 1, title: "Learning React", status: false}
]


export function todoReducer(state, action){
    switch(action.type){
        case 'ADD_TODO':
            const { id, title} = action.payload;
            return [...state, {id, title, status: false}];
        default:
            throw new Error("Invalid action type");
    }
}
