import React from 'react';
import PropTypes from 'prop-types';

/**
 * 一個Bootstrap Modal的呼叫
 */
class ModalView extends React.Component {
    /**
     */
    componentDidMount() {
        $(this.modal).modal('show');
    }

    /**
     *
     * @param {boolean} result
     */
    hideModal(result) {
      let {callback} = this.props;
      $(this.modal).on('hidden.bs.modal', () => callback(result));
      $(this.modal).modal('hide');
    }

    /**
     * @return {component}
     */
    render() {
        let {title, content} = this.props;
        return (
          <div className="modal fade" ref={(modal) => this.modal = modal}>
            <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{title}</h4>
                  <button type="button" className="close" onClick={() => this.hideModal(false)}
                     aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                  <p>{content}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary"
                         onClick={() => this.hideModal(true)}>是</button>
                  <button type="button" className="btn btn-secondary"
                         onClick={() => this.hideModal(false)}>否</button>
                </div>
              </div>
            </div>
          </div>
        );
    };
}

ModalView.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
};

export default ModalView;
