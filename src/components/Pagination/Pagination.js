import React from "react";
import Container from "@material-ui/core/Container";
import styles from "../../App.module.css";

class Pagination extends React.Component {
  state = {
    slug: this.props.slug,
    current_page: this.props.page,
    per_page: 20,
    totalResults: this.props.totalResults
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.slug !== this.props.slug) {
      this.setState({ slug: nextProps.slug });
    }
    if (nextProps.page !== this.props.page) {
      this.setState({ current_page: nextProps.page });
    }

    if (nextProps.totalResults !== this.props.totalResults) {
      this.setState({ totalResults: nextProps.totalResults });
    }
  }

  render() {
    const { loadData } = this.props;
    const { slug } = this.state;

    let renderPageNumbers;

    const pageNumbers = [];
    if (this.state.totalResults !== null) {
      for (
        let i = 1;
        i <= Math.ceil(this.state.totalResults / this.state.per_page);
        i++
      ) {
        pageNumbers.push(i);
      }

      renderPageNumbers = pageNumbers.map(pageNumber => {
        let classes =
          this.state.current_page === pageNumber ? styles.active : "";
        return (
          <span
            key={pageNumber}
            className={classes}
            onClick={() => loadData(this.state.slug, pageNumber)}
          >
            {pageNumber}
          </span>
        );
      });
    }

    return (
      <div className={styles.pagination}>
        <Container maxWidth="sm">
          <span onClick={() => loadData(slug, 1)}>&laquo;</span>
          {renderPageNumbers}
          <span onClick={() => loadData(slug, 1)}>&raquo;</span>
        </Container>
      </div>
    );
  }
}

export default Pagination;
