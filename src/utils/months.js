const getMonthName = (mouth) => {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return monthNames?.[mouth] || "Não Idenficado";
}

export default getMonthName;