import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { createNews } from '../../actions/news';
const initialState = {
  headline: '',
  picture: '',
  authorName: '',
  firstParagraph: '',
  secondParagraph: '',
  thirdParagraph: '',
};
function PublishNews() {
  const [news, setNews] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNews(news));
    clear();
    console.log(news);
  };
  const clear = () => {
    setNews({
      headline: '',
      picture: '',
      authorName: '',
      firstParagraph: '',
      secondParagraph: '',
      thirdParagraph: '',
    });
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Typography variant="h5" component="div">
        Publish news
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '55ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          id="outlined-basic"
          label="Headline"
          variant="standard"
          required
          fullwidth
          name="headline"
          value={news.headline}
          onChange={(e) => ({ ...news, headline: e.target.value })}
        />
        <TextField
          required
          id="outlined-basic"
          label="First Paragraph"
          variant="standard"
          fullwidth
          name="firstParagraph"
          value={news.firstParagraph}
          onChange={(e) => ({ ...news, firstParagraph: e.target.value })}
        />
        <TextField
          required
          id="outlined-basic"
          label="Picture"
          variant="standard"
          fullwidth
          name="picture"
          value={news.picture}
          onChange={(e) => ({ ...news, picture: e.target.value })}
        />
        <TextField
          type="text"
          required
          id="outlined-basic"
          label="Second Paragraph"
          variant="standard"
          fullwidth
          name="secondParagraph"
          value={news.secondParagraph}
          onChange={(e) => ({ ...news, secondParagraph: e.target.value })}
        />
        <TextField
          type="text"
          required
          id="outlined-basic"
          label="Third Paragraph"
          variant="standard"
          fullwidth
          name="thirdParagraph"
          value={news.thirdParagraph}
          onChange={(e) => ({ ...news, thirdParagraph: e.target.value })}
        />
        <TextField
          type="text"
          required
          id="outlined-basic"
          label="Author Name"
          variant="standard"
          fullWidth
          name="authorName"
          value={news.authorName}
          onChange={(e) => ({ ...news, authorName: e.target.value })}
        />
        <Button
          onClick={handleSubmit}
          sx={{ minWidth: 275 }}
          variant="contained"
          fullwidth
          color="primary"
          type="submit"
        >
          Publish
        </Button>
        <Button
          sx={{ minWidth: 275 }}
          onClick={clear}
          variant="contained"
          fullWidth
          color="secondary"
          type="submit"
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
}

export default PublishNews;
