type ModalProps = {
  //id: number;
  image: string;
  title: string;
  description: string;
}

export default function Modal({image, title, description}:ModalProps){

  return(

    <div className="modal fade" id="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <img src={image} alt={description}/>
          <div className="modal-body">
            <p>{description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

  );

}