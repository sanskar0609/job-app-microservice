import React, { useState, useEffect } from "react";
import reviewService from "../api/reviewService";
import { Container, TextField, Button, Card, CardContent, Typography, IconButton, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ReviewUI = () => {
    const [companyId, setCompanyId] = useState("");
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ title: "", description: "", rating: "" });

    useEffect(() => {
        if (companyId) {
            fetchReviews();
        }
    }, [companyId]);

    const fetchReviews = async () => {
        try {
            const data = await reviewService.getReviews(companyId);
            setReviews(data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    const handleAddReview = async () => {
        try {
            await reviewService.addReview(companyId, newReview);
            setNewReview({ title: "", description: "", rating: "" });
            fetchReviews();
        } catch (error) {
            console.error("Error adding review:", error);
        }
    };

    const handleDeleteReview = async (reviewId) => {
        try {
            await reviewService.deleteReview(reviewId);
            fetchReviews();
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Company Reviews</Typography>
            
            <TextField
                label="Enter Company ID"
                type="number"
                fullWidth
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={fetchReviews} fullWidth>
                Fetch Reviews
            </Button>
            
            <Card variant="outlined" sx={{ mt: 2, p: 2 }}>
                <Typography variant="h6">Add Review</Typography>
                <TextField
                    label="Title"
                    fullWidth
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="Description"
                    fullWidth
                    multiline
                    rows={3}
                    value={newReview.description}
                    onChange={(e) => setNewReview({ ...newReview, description: e.target.value })}
                    margin="normal"
                />
                <TextField
                    label="Rating"
                    type="number"
                    fullWidth
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                    margin="normal"
                />
                <Button variant="contained" color="success" onClick={handleAddReview} fullWidth>
                    Add Review
                </Button>
            </Card>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                {reviews.map((review) => (
                    <Grid item xs={12} key={review.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">{review.title}</Typography>
                                <Typography>{review.description}</Typography>
                                <Typography color="textSecondary">Rating: {review.rating}</Typography>
                                <IconButton onClick={() => handleDeleteReview(review.id)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ReviewUI;