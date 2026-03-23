export async function shopifyFetch({ query, variables = {} }) {
  const domain = import.meta.env.PUBLIC_SHOPIFY_DOMAIN || 'sb-floristry.myshopify.com';
  const token = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_TOKEN || '35527e42586bf1abcce2dda69206eec9';

  try {
    const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token
      },
      body: JSON.stringify({ query, variables })
    });
    
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Shopify Fetch Error:", error);
    throw error;
  }
}