
type EducationCardProps = {
  id: number;
  img: string;
  inst: string;
  edu: string;
  cgpa: number;
  branch: string | undefined;
  startingYear: number | undefined;
  finishedYear: number | undefined;
}

const EducationCard: React.FC<EducationCardProps> = (props) => {
  return (
    <>
      <div key={props.id}>
        <div className="counter-box">
          <div className="counter-ico">
            <span className="ico-circle">
              <img src={props.img} alt="school" className="pl-1" />
            </span>
          </div>
          <div className="counter-num">
            <div className="edu">
              {props.edu}
            </div>
            <div className="text-2xl font-semibold"> {props.inst} </div>
            <div className="counter-text">{props.branch}</div>
            <div className="counter-text">
              {props.startingYear && props.finishedYear ? `${props.startingYear} - ${props.finishedYear}` : props.finishedYear ? `${props.finishedYear}` : ''}
            </div>
            <span className="counter-text"> CGPA : {props.cgpa}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
