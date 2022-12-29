import React from 'react';

const Body = () => {
  return (
    <div className='flex flex-col pt-8 pl-20 pr-20 laptop:pl-0 laptop:pl-4'>
      <h1 className='flex justify-center laptop:justify-start text-2xl laptop:text-5xl tablet:text-3xl font-bold font-serif'>
        Johan Vegelius
      </h1>
      <h1 className='text-l mt-5 '>
        I'm a postdoc researcher at the Department of Medical Sciences, Uppsala University. My
        research is latent variable modeling with applications in, e.g., neuroscience and peace and
        conflict research.
      </h1>
      <h1 className='text-2xl tablet:text-3xl mt-5 mb-1'>Peer-reviewed publications</h1>
      <ul className='list-disc ml-5'>
        <li>
          Jin, S., Vegelius, J., Yang-Wallentin, F (2020),{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://www.tandfonline.com/doi/full/10.1080/10705511.2020.1712552'}
          >
            "A Marginal Maximum Likelihood Approach for Extended Structural Equation Modeling with
            Ordinal Data"
          </a>
          , <em>Structural Equation Modeling: A Multidisciplinary Journal</em>
        </li>
        <li>
          Vegelius, J., Jin, S. (2021),{' '}
          <a
            className='text-blue-600 hover:text-blue-400'
            href={'https://www.tandfonline.com/doi/full/10.1080/10705511.2020.1848431'}
          >
            "A Semiparametric Approach for Structural Equation Modeling with Ordinal Data"
          </a>
          , <em>Structural Equation Modeling: A Multidisciplinary Journal</em>
        </li>
      </ul>
    </div>
  );
};

export default Body;
