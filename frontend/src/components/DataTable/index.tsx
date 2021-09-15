import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "Utils/format";
import { Base_URL } from "Utils/requests";


const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last:true,
        number:0,
        totalPages: 0,
        totalElements: 0
    });

    useEffect (() =>{
        axios.get(`${Base_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
        .then(response => {
            setPage(response.data)
        });

    },[activePage]);

    const changePage = (index: number) =>{
        setActivePage(index);
    }

    return (
        <>
        <Pagination page={page} onPageChange={changePage} />
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
               
                        {page.content?.map(items =>(
                        <tr key={items.id} >
                            <td>{formatLocalDate(items.date,"dd/MM/yyyy")}</td>
                            <td>{items.seller}</td>
                            <td>{items.visited}</td>
                            <td>{items.deals}</td>
                            <td>{items.amount.toFixed(2)}</td>
                        </tr>
                        ))} 
                </tbody>
            </table>
        </div>
    </>                   
    );
}

export default DataTable;
