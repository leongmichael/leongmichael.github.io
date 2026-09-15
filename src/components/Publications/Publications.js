import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import publications from './Publications.json';

const LINK_FIELDS = [
  ['arxiv', 'arxiv'],
  ['paper', 'paper'],
  ['pdf', 'pdf'],
  ['website', 'website'],
  ['site', 'site'],
  ['github', 'github'],
  ['repo', 'repo'],
  ['code', 'code'],
  ['dataset', 'dataset'],
  ['video', 'video'],
];

const getPublicationLinks = (pub) => {
  const seen = new Set();
  const links = [];

  LINK_FIELDS.forEach(([field, label]) => {
    if (pub[field] && !seen.has(pub[field])) {
      seen.add(pub[field]);
      links.push({ label, url: pub[field] });
    }
  });

  if (pub.links) {
    Object.entries(pub.links).forEach(([label, url]) => {
      if (url && !seen.has(url)) {
        seen.add(url);
        links.push({ label, url });
      }
    });
  }

  if (pub.link && !seen.has(pub.link)) {
    links.push({ label: 'paper', url: pub.link });
  }

  return links;
};

const NAME_SPLIT = /(Michael Leong|Leong, Michael|Leong, M\.)/gi;
const isOwnName = (part) => /^(Michael Leong|Leong, Michael|Leong, M\.)$/i.test(part);

const highlightName = (text) =>
  text.split(NAME_SPLIT).map((part, index) =>
    isOwnName(part) ? (
      <Box component="span" key={`${part}-${index}`} sx={{ fontWeight: 700, color: 'text.primary' }}>
        {part}
      </Box>
    ) : (
      part
    )
  );

const PublicationLinks = ({ links }) => {
  if (!links.length) return null;

  return (
    <Typography variant="body2" color="primary" component="div">
      {links.map((link, index) => (
        <React.Fragment key={`${link.label}-${link.url}`}>
          {index > 0 && (
            <Box component="span" sx={{ color: 'text.secondary' }}>
              {' / '}
            </Box>
          )}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {link.label}
          </a>
        </React.Fragment>
      ))}
    </Typography>
  );
};

const Publications = () => {
  const PublicationItem = ({ pub }) => {
    const links = getPublicationLinks(pub);

    return (
      <Box sx={{ py: 1.5, borderBottom: '1px dotted #eee' }}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography variant="subtitle1" fontWeight="medium">{pub.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {highlightName(pub.authors)} ({pub.year}). {pub.journal}.
            </Typography>
            <PublicationLinks links={links} />
            {pub.description && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {pub.description}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Box mb={4}>
      <Typography variant="h5" fontWeight="medium" mb={0}>Publications</Typography>
      {publications.map((pub, index) => (
        <PublicationItem key={index} pub={pub} />
      ))}
    </Box>
  );
};

export default Publications;
