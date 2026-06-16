export default function TaskFilters({ filter, setFilter }){
    return (
        <div className="filter">
            <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                <option value="todas">Todas</option>
                <option value="pendentes">Pendentes</option>
                <option value="concluidas">Concluídas</option>
                <option value="altaprioridade">Alta prioridade</option>
                <option value="baixaprioridade">Baixa prioridade</option>
            </select>
        </div>
    )
}