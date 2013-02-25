//
//  DetailViewController.h
//  HTML5 game
//
//  Created by Theres on 25.02.13.
//  Copyright (c) 2013 bakerstreet corp. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController <UISplitViewControllerDelegate>

@property (strong, nonatomic) id detailItem;

@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;
@end
