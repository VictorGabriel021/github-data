import ReactPaginate from 'react-paginate';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import './styles.scss';

type Props = {
    onChange: (item: number) => void;
    pageCount: number;
    activePage: number;
  }

const Pagination = ({ pageCount, activePage, onChange } : Props) => {

    return (
          <ReactPaginate
            previousLabel={<GrPrevious className="arrow-pagination" />}
            nextLabel={<GrNext className="arrow-pagination" />}
            breakLabel={'...'}
            pageCount={pageCount}
            forcePage={activePage - 1}
            onPageChange={selectedItem => onChange(selectedItem.selected + 1)}
            containerClassName={'paginationContainer'}
            activeClassName={'page-active'}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
          />
      );
};

export default Pagination;
