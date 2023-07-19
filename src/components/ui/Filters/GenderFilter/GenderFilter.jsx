import React from 'react';

const GenderFilter = ({ inputOptions, setSelectedGender, genderRefs }) => {

  const handleCheckbox = (event) => {
    genderRefs.current.map((genderRef) => {
      if (genderRef.value !== event.target.value && event.target.checked) {
        genderRef.disabled = true;
      } else if (genderRef.value !== event.target.value && !event.target.checked) {
        genderRef.disabled = false;
      }

      setSelectedGender(event.target.value);
      
    });          
  };

  return (
    <div className="filter-label-and-options">
      <label htmlFor={inputOptions} className="filter-label">
        género
      </label>
      {inputOptions.map((option, index) => (
        <div className="filter-options" key={index}>
          <input
            type="checkbox"
            id={option}
            name="género"
            value={option}
            onChange={handleCheckbox}
            ref={(el) => (genderRefs.current[index] = el)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default GenderFilter;
