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
        // $(node).on('hidden.bs.modal', this.props.callback(false));
    }

    /**
     * @return {component}
     */
    render() {
        let {title, content, callback} = this.props;
        return (
          <div className="modal fade" ref={(modal) => this.modal = modal}>
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{title}</h4>
                  <button type="button" className="close" onClick={() => callback(false)}
                     data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                  <p>{content}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary"
                         data-dismiss="modal" onClick={() => callback(true)}>是</button>
                  <button type="button" className="btn btn-secondary"
                         data-dismiss="modal" onClick={() => callback(false)}>否</button>
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
