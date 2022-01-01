import {useState} from "react";


function usePagination(data,itemsPerpage){
    const [currentPage,setCurrentpage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerpage);

    function Gopage(page){
        setCurrentpage(page);
    }

    function currentData(){
        const start = (currentPage - 1) * itemsPerpage;
        const end = start + itemsPerpage;
        return data.slice(start,end);
    }

    return {currentPage ,setCurrentpage, Gopage , currentData , maxPage}
}


export default usePagination;