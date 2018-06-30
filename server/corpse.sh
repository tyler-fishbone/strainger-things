CREATE TABLE IF NOT EXISTS
strain(
  strain_id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  type VARCHAR(20),
  abbreviation VARCHAR(20),
  description TEXT,
  image_url TEXT,
)

CREATE TABLE IF NOT EXISTS strain( strain_id SERIAL PRIMARY KEY, name VARCHAR(100) UNIQUE NOT NULL, type VARCHAR(20), abbreviation VARCHAR(20), description TEXT, image_url TEXT);


--

CREATE TABLE IF NOT EXISTS
gif(
  gif_id SERIAL PRIMARY KEY,
  strain_id INTEGER NOT NULL REFERENCES strain(strain_id),
  giphy_id VARCHAR(100) UNIQUE NOT NULL,
  downsized_large_url TEXT,
  search_tag TEXT,
)

CREATE TABLE IF NOT EXISTS gif( gif_id SERIAL PRIMARY KEY, strain_id INTEGER NOT NULL REFERENCES strain(strain_id), giphy_id VARCHAR(100) NOT NULL, downsized_large_url TEXT, search_tag TEXT);



--

INSERT INTO strain (name, type, abbreviation, description, image_url) VALUES ('blue dream', 'hybrid', 'bd', 'Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing a Blueberry indica with the sativa Haze, Blue Dream balances full-body relaxation with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which ease you gently into a calm euphoria. Some Blue Dream phenotypes express a more indica-like look and feel, but the sativa-leaning variety remains most prevalent.
With a sweet berry aroma redolent of its Blueberry parent, Blue Dream delivers swift symptom relief without heavy sedative effects. This makes Blue Dream a popular daytime medicine for patients treating pain, depression, nausea, and other ailments requiring a high THC strain.', 'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/1002060/b/blue-dream__primary_bc12.jpg');

INSERT INTO strain (name, type, abbreviation, description, image_url) VALUES ('sour diesel', 'sativa', 'sd', 'Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients. This strain took root in the early 90''s, and it is believed to have descended from Chemdawg 91 and Super Skunk.', 'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/1002265/b/sour-diesel__primary_9855.jpg');

INSERT INTO strain (name, type, abbreviation, description, image_url) VALUES('granddaddy purple', 'indica', 'gdp', 'Introduced in 2003 by Ken Estes, Granddaddy Purple (or GDP) is a famous indica cross between Purple Urkle and Big Bud. This California staple inherits a complex grape and berry aroma from its Purple Urkle parent, while Big Bud passes on its oversized, compact bud structure. GDP flowers bloom in shades of deep purple, a contrastive backdrop for its snow-like dusting of white crystal resin.

Its potent effects are clearly detectable in both mind and body, delivering a fusion of cerebral euphoria and physical relaxation. While your thoughts may float in a dreamy buzz, your body is more likely to find itself fixed in one spot for the duration of GDP’s effects. Like most heavy indica varieties, Granddaddy Purple is typically pulled off the shelf for consumers looking to combat pain, stress, insomnia, appetite loss, and muscle spasms. GDP blesses growers with massive commercial yields which are ready for harvest following a 60 day flowering time indoors.', 'https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/1003469/b/granddaddy-purple__primary_f3dc.jpg');


sour diesel

granddaddy purple