import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './card.css';

// Scorecard received from App
const ReposResults = ({ results, count, error }) => {
    return (
        <>
            {/* Error handling of the api with conditional display */}
            {error && (
                <p className="api-error">Une erreur s'est produite, veuillez réessayer.</p>
            )}
            {/* Display for bonus but not completed */}
            {count >= 1 && (
                <div className="checkbox-all">
                    <div>
                        <input type="checkbox" id="checked-all-user" name="checked" value="checked" />
                        <label>... elements selected</label>
                    </div>
                    <div className="icon-card">
                        <div className="duplicate-icon"><ion-icon name="duplicate-outline"></ion-icon></div>
                        <div className="bin-icon"><ion-icon name="trash-bin-outline"></ion-icon></div>
                    </div>
                </div>
            )}
            <div className="main-card" >
                {/* Allows the message to appear if the search result is 0 */}
                {count === 0 && (
                    <p className="no-result">Aucun user trouvé, vous avez le droit de relancer votre recherche !</p>
                )}

                {/* With the map this turns each of the objects into a Card component */}
                {results.map((item) => (
                    <Card
                        // I use here the Spread Operator and in the Card file I will choose the information I am interested in
                        {...item}
                        key={item.id}
                    />
                ))}
            </div>
        </>
    );
}

ReposResults.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default ReposResults;