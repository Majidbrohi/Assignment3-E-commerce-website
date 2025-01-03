import { NextApiRequest, NextApiResponse } from 'next';
// import { products } from '../../data/product'; // Removed as we are fetching data dynamically

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!response.ok) {
      return res.status(response.status).json({ message: `Error fetching product: ${response.statusText}` });
    }
    const product = await response.json();
    return res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;

