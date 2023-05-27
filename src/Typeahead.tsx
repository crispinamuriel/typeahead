import { useState, useEffect } from 'react';

interface APIData {
  name: string;
  state: string;
  id: string;
}

export const Typeahead = () => {

  const [type, setType] = useState('');
  const [apiData, setAPIData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [submittedText, setSubmittedText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (submittedText !== '') {
      setShowSuccess(true);
    }
  }

  const handleClick = (e: React.SyntheticEvent) => {
    const suggestionDiv = e.target as HTMLElement;
    const clickedText = suggestionDiv.innerHTML;
    setType(clickedText);
    setSubmittedText(clickedText);
  }

  useEffect(() => {
    if (apiData.length > 0) {
      setShowData(true);
    }
    if (submittedText == type) {
      setShowData(false);
    }
  }, [apiData, showData, submittedText, type]);

  const fetchData = (text: string) => {
    fetch(`https://6272cd826b04786a09fd47ed.mockapi.io/api/v1/cities?name=${text}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAPIData(data)
      })
  }

  const handleChange = (text: string) => {
    setType(text);

    // If the user's input string is more than 2 characters long, then send api request.
    if (text.length > 2) {
      fetchData(text);
    }

  }


  return (
    <>
      <div>
        {showSuccess ? <div className="success">SUCCESS</div> : ''}
        <form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
          <label>
            Name:
            <input type="text" value={type} onChange={e => handleChange(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {showData ? apiData.map((city: APIData) => <div className="typeahead" key={city.id} onClick={e => handleClick(e)}>{city.name}</div>) : ''}
      </div>
    </>
  )
}

export default Typeahead;