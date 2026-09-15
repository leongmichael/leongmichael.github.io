import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
} from '@mui/material';
import publications from './Publications.json';
import ImageGallery from '../ImageGallery/ImageGallery';

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

const getContributions = (pub) => pub.contributions || pub.bullets || [];

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

const PublicationLinks = ({ links, extras = [] }) => {
  if (!links.length && !extras.length) return null;

  const items = [
    ...links.map((link) => ({ type: 'link', ...link })),
    ...extras,
  ];

  return (
    <Typography
      variant="body2"
      color="primary"
      component="div"
      sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && (
            <Box component="span" sx={{ color: 'text.secondary' }}>
              {' / '}
            </Box>
          )}
          {item.type === 'toggle' ? (
            <Box
              component="button"
              type="button"
              onClick={item.onClick}
              aria-expanded={item.active}
              sx={{
                border: 0,
                padding: 0,
                background: 'none',
                color: 'inherit',
                font: 'inherit',
                cursor: 'pointer',
                fontWeight: item.active ? 700 : 400,
              }}
            >
              {item.label}
            </Box>
          ) : (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {item.label}
            </a>
          )}
        </React.Fragment>
      ))}
    </Typography>
  );
};

const ContributionList = ({ contributions }) => {
  const theme = useTheme();

  return (
    <List sx={{ p: 0, pt: 1 }}>
      {contributions.map((bullet, index) => (
        <ListItem key={index} sx={{ p: 0, mb: 0.1 }}>
          <ListItemIcon sx={{ minWidth: 20, mt: 0.5 }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: theme.palette.text.secondary,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}
              >
                {bullet}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

const PublicationItem = ({ pub }) => {
  const [showContributions, setShowContributions] = useState(false);
  const links = getPublicationLinks(pub);
  const contributions = getContributions(pub);
  const images = pub.images || [];

  return (
    <Box sx={{ py: 2, borderBottom: '1px dotted #eee' }}>
      <Box
        sx={{
          display: 'flex',
          gap: 2.5,
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <ImageGallery images={images} title={pub.title} variant="wide" />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ lineHeight: 1.35, mb: 0.5 }}>
            {pub.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.88rem', lineHeight: 1.5, mb: 1 }}>
            {highlightName(pub.authors)}
          </Typography>
          {pub.journal && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                width: 'fit-content',
                px: 1.25,
                py: 0.3,
                mb: 1,
                borderRadius: 999,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={500}
                sx={{ fontSize: '0.72rem' }}
              >
                {pub.journal}
              </Typography>
            </Box>
          )}
          <PublicationLinks
            links={links}
            extras={
              contributions.length
                ? [{
                    type: 'toggle',
                    label: 'contributions',
                    active: showContributions,
                    onClick: () => setShowContributions((open) => !open),
                  }]
                : []
            }
          />
          {pub.description && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: '0.88rem', lineHeight: 1.55 }}>
              {pub.description}
            </Typography>
          )}
          <Collapse in={showContributions} timeout="auto" unmountOnExit>
            <ContributionList contributions={contributions} />
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
};

const Publications = () => (
  <Box mb={4}>
    <Typography variant="h5" fontWeight="medium" mb={0}>Research</Typography>
    {publications.map((pub, index) => (
      <PublicationItem key={index} pub={pub} />
    ))}
  </Box>
);

export default Publications;
